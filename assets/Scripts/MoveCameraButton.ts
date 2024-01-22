import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('YourScriptName')
export class YourScriptName extends Component {
    @property({ type: Node })
    yourCameraNode: Node = null;

   

    onButtonClick() {
        // Animasyonu başlat
        const animationComponent = this.yourCameraNode.getComponent(cc.Animation);
        if (animationComponent) {
            animationComponent.play('cameraslide');
        }
    }

    onButtonClick2() {
        // Animasyonu başlat
        const animationComponent = this.yourCameraNode.getComponent(cc.Animation);
        if (animationComponent) {
            animationComponent.play('geridon');
        }
    }
}
