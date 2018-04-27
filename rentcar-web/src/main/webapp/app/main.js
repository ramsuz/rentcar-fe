import 'babel-polyfill';
import { PLATFORM } from "aurelia-pal";

export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();
  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}