import { MyWorkspaceComponent } from "./MyWorkspace/Component/MyWorkspaceComponent";
export class ComponentRegistration {

    static registerComponents = () => {

        ko.components.register("my-workspace", new MyWorkspaceComponent(null,null));
        

    }

}