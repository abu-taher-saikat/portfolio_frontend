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
                {/* what ithalsdjflaskd asdf */}
                <span></span>
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
