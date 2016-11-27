import { join } from 'path';

import { SeedConfig } from './seed.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  FONTS_DEST = `${this.APP_CLIENT_DEST}/fonts`;
  FONTS_SRC = ['node_modules/font-awesome/fonts/**'];

  constructor() {
    super();

    this.APP_TITLE = 'LMS';
    this.SYSTEM_CONFIG_DEV.paths['ng2-imageupload'] = `${this.APP_BASE}node_modules/ng2-imageupload`;
    this.SYSTEM_BUILDER_CONFIG.packages['ng2-imageupload'] = { main: 'index.js', defaultExtension : 'js'};
    this.SYSTEM_CONFIG_DEV.paths['ng2-validation'] = `${this.APP_BASE}node_modules/ng2-validation`;
    this.SYSTEM_BUILDER_CONFIG.packages['ng2-validation'] = { main: 'index.js', defaultExtension : 'js'};
    // this.SYSTEM_CONFIG_DEV.paths['angular2-jwt'] = `${this.APP_BASE}node_modules/angular2-jwt`;
    // this.SYSTEM_BUILDER_CONFIG.packages['angular2-jwt'] = { main: 'angular2-jwt.js', defaultExtension : 'js'};


    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      {src: 'primeng/resources/primeng.min.css', inject: true },
      {src: 'primeng/resources/themes/delta/theme.css', inject: true },
      {src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs'},
      {src: 'bootstrap/dist/css/bootstrap.min.css', inject: true},
      {src: 'ng2-bootstrap/bundles/ng2-bootstrap.min.js', inject: 'libs' },
      {src: 'font-awesome/css/font-awesome.min.css', inject: true },
      {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_CLIENT_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}
