import { makeAutoObservable } from "mobx"


class ToolState {
    tool = null

    constructor() {
        makeAutoObservable(this)
    }

    setCanvas(tool) {
        this.tool = tool
    }
}

export default new ToolState()