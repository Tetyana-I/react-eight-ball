import './EightBall.css';

const EightBall = ({ msg, color }) => (
    
    <div className = "EightBall"  style = {{ backgroundColor: color }}>
        <p className = "EightBall-msg">{ msg }</p>
    </div> 
)

export default EightBall;