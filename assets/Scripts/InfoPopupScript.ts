import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('InfoPopupScript')
export class InfoPopupScript extends Component {
    
    @property({ type: Node })
    infoNode: Node = null;

    @property({ type: Node })
    infoLabel: Node = null;

    @property({ type: Node })
    infoLabel2: Node = null;
   

    infoac() {
        // Animasyonu başlat
        var children = this.infoNode.children;
        var aktifVarMi=false;
        for (let index = 0; index < children.length; index++) {
            const element = children[index];
            if(element.name.includes("info") && element.active){
                aktifVarMi=true;
             }            
        }
if(!aktifVarMi){
    const animationComponent = this.infoNode.getComponent(cc.Animation);
    if (animationComponent) {
        animationComponent.play('popupac');
        this.infoLabel.active=true;
        this.infoLabel2.active=true;
    }
}
        
    }
    infokapa() {
        // Animasyonu başlat
        const animationComponent = this.infoNode.getComponent(cc.Animation);
        var children = this.infoNode.children;
        children.forEach(child => {
            if(child.name.includes("info")){
                child.active=false;
            }
        });
        if (animationComponent) {
            animationComponent.play('popupkapa');
        }
    }
}


