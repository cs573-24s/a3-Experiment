import instructions from './intro-page.png'


  //return must be ONE element (just wrap in div)
 console.log(instructions); // /logo.84287d09.png

export default function IntroPage() {

return (
    <div>
      <h2>Thank you for participating in our experiment! The following graphic provides instructions for completing the assesment. Once you are ready, click on the "Participate" button!</h2>
      <img src={instructions} alt="Instructions" />
    </div>
  );  

}

