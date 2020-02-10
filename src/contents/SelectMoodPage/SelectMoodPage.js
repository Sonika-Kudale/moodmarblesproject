import React, { Component } from 'react'

class SelectMoodPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       img_url: "",
    }
  }

  imageClick = () => {
    console.log('Click!!!!');
  }      
  
  render() {
    return (
      <div className="bx--grid bx--grid--full-width container" >
        <form action="">
          <div className="bx--row">
            <div className="SectionHeaders">Squad Details</div>
            <div className="bx--row bx--no-gutter Rows">
              <div className="bx--col-lg-6">
                <label htmlFor="subdomain" className="floatLabel">Sub Domain    </label>
                <input type="text" id="subdomain" className="squadinput" placeholder="Provide your Sub Domain" />
              </div>
              <div className="bx--col-lg-6">
                <label htmlFor="tribe" className="floatLabel">Tribe      </label>
                <input type="text" id="tribe" className="squadinput" placeholder="Provide your Tribe" />
              </div>
              <div className="bx--col-lg-6">
                <label htmlFor="squadname" className="floatLabel label3">Squad Name</label>
                <input type="text" id="squadname" className="squadinput" placeholder="Provide Your Squad Name" />
              </div>
            </div>
          </div>
          <div className="bx--row">
            <div className="SectionHeaders">How Do You Feel Today????</div>
            <div className="bx--row bx--no-gutter Rows">
              <div className="bx--col-lg-6">
                <div className="RadioOptionsAlignment" >
                  <label id="Sad" name="Moods">
                    <img className="radioImage" onClick={this.imageClick} src={`${process.env.PUBLIC_URL}/utils/images/sad.png`} alt="Sad" value="1" />
                  </label>
                </div>
                <div className="RadioOptionsAlignment" >
                  <label id="SomewhatSad" name="Moods">
                    <img className="radioImage" src={`${process.env.PUBLIC_URL}/utils/images/somewhatsad.png`} alt="SomewhatSad" value="2" />
                  </label>
                </div>
                <div className="RadioOptionsAlignment" /* changed={this.radioChangeHandler} isSelected={this.state.paymentMethod === "QuickPay"} */ >
                  <label id="Neutral" name="Moods">
                    <img className="radioImage" src={`${process.env.PUBLIC_URL}/utils/images/neutral.png`} alt="Neutral" value="3" />
                  </label>
                </div>
                <div className="RadioOptionsAlignment" >
                  <label id="SomewhatHappy" name="Moods">
                    <img className="radioImage" src={`${process.env.PUBLIC_URL}/utils/images/somewhathappy.png`} alt="SomewhatHappy" value="4" />
                  </label>
                </div>
                <div className="RadioOptionsAlignment" >
                  <label id="Happy" name="Moods">
                    <img className="radioImage" src={`${process.env.PUBLIC_URL}/utils/images/happy.jpg`} alt="Happy" value="5" />
                  </label>
                </div>
              </div>
              <div className="bx--col-lg-6">
                <div className="moodOptionSelected"><img src={this.state.img_url} alt="" /></div>
              </div>
            </div>
        </div>
        <div className="bx--row">
          <div className="bx--col-lg-16 bx--no-gutter">Thank you for your score!!! What did you find valuable/significant for your Squad/Role?</div>
          <div className="bx--col-lg-16 bx--no-gutter">
            <div className="">Choose Only One Option -</div> 
            <div className=""></div>
          </div>
          <div className="bx--col-lg-16 bx--no-gutter">Your Feedback is key!!! Please let us know which of the following should have the highest priority to improve</div>
          <div className="bx--col-lg-16 bx--no-gutter">
            <div className="">Choose Only One Option - </div>
            <div className=""></div> 
          </div> 
        </div>
        <div className="bx--row">
          <div className="SectionHeaders">Comments</div>
          <div><textarea/></div>
        </div>
        <div className="bx--row">
          <input type="submit" value="Submit"></input>
        </div>
        </form>
      </div>
    );
  }
}

export default SelectMoodPage