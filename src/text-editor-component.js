/** @babel */

import TextEditorElement from './text-editor-element'

export default class TextEditorComponent {
  constructor ({model}) {
    this.model = model
    this.view = new TextEditorElement().initialize(model, atom, false)
  }

  get element () {
    return this.view.rootElement
  }

  getModel () {
    return this.model
  }
}
