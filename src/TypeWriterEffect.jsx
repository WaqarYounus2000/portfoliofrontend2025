import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = ({title='a Developer'}) => {
  // console.log(title)
  return (
    <TypeAnimation
    key={title}
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "a Student",
        1500, // wait 1s before replacing 
        title,
        1500,
        
        
      ]}
      wrapper="span"
      speed={55}
      style={{ fontSize: '1.1em', display: 'inline-block',color:"#0563bb",letterSpacing:"1"}}
      repeat={Infinity}
    />
  );
};


export {ExampleComponent}