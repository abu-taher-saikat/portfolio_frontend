import ReactFlow, {
    Controls,
    Background,
  } from 'react-flow-renderer';

import elements from './Edge';
//   import styles from "../styles/Skills.module.scss";
import './Skill.scss';
  
const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

const Skill = () => {
    return (
        <>
            <div className="skillFlow">
              <div className="fixFlow">
                <h3>My Skill's path</h3>
                <ReactFlow 
                  elements={elements} 
                  onLoad={onLoad}
                  zoomOnScroll={false}
                  showFitView={false}
                  showZoom={false}  
                >
                    <Controls />
                    <Background />
                </ReactFlow>
              </div>
            </div>
        </>
    ) 
}

export default Skill
