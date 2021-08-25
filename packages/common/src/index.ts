import { IOptions } from "./definitions";
import { IEzbConfig } from "@ezbackend/core";
import { fastify } from "fastify";
import { EzBackend } from "./definitions";
import { mixedInstance } from "avvio";
import { createConnection } from "typeorm";
import { APIGenerator } from "./models";
import { kebabCase } from "./helpers";
import {convert} from './models/typeorm-json-schema'

const ezb = EzBackend.app();

//Configure defaults
ezb.plugins.init = async (
  ezb: mixedInstance<EzBackend>,
  opts: IEzbConfig & IOptions,
  cb
) => {
  ezb.server = fastify(opts.server);
  cb();
};

//TODO: Remove the requirement for including mixedINstance and IEzbConfig & IOptions
//TODO: Consider if automatically including createdAt and updatedAt is useful
ezb.plugins.handler = async (ezb: mixedInstance<EzBackend>, opts: IEzbConfig &IOptions, cb) => {
  //URGENT TODO: Think about consequences of using createConnection to import index.ts
  ezb.orm = await createConnection(opts.orm);
  ezb.models.forEach((model) => {
    
    //Add all models to be a schema
    const metaData = ezb.orm.getMetadata(model)
    const schema = convert(metaData)
    ezb.server.addSchema(schema)

    //Create api routes for all repositories
    const repo = ezb.orm.getRepository(model);
    const generator = new APIGenerator(repo, { prefix: kebabCase(repo.metadata.name) });
    generator.generateRoutes();
  });
  cb();
};

ezb.plugins.run = async (
  ezb: mixedInstance<EzBackend>,
  opts: IEzbConfig,
  cb
) => {
  await ezb.server.listen(opts.port, function (err, address) {
    if (err) {
      console.error(err);
    }
  });
  cb();
};

export { EzBackend } from "./definitions";
export { EzModel, response, APIGenerator } from "./models";
