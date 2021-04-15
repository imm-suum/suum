import React, { useState, useMemo, useCallback } from 'react';
import Lottie from "react-lottie";
import plantAnimation from '../../assets/plant3.json';

function PlantAnimation (){
   
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: plantAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  



	// const playAnimation = () => {
	// 	playSegments([0, 165], true);
	// 	//loopAnimation();
	// 	console.log("playing")
	// }

	// const loopAnimation = () => {
	// 	playSegments([139, 165], false);
	// }




  const handlePlay = useCallback(() => {
    setIsStopped(false);
    setIsPaused(false);
    // playAnimation();
  }, []);

  return useMemo(()=>{
    return (

      <div className="plantAnimationDiv">
        <Lottie
          options={defaultOptions}
          height={"auto"}
          width={"100%"}
          isStopped={isStopped}
          isPaused={isPaused}
        >

        </Lottie>
      </div>
    );
  }, [isStopped, isPaused, handlePlay]);
}

export default PlantAnimation;