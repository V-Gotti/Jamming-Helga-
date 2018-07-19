import React from 'react';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isRemoval: "-"}
  }

  /*Create a method called renderAction that displays a - anchor tag if the isRemoval property is true,
    and a + anchor tag if the isRemoval property is false. Set the class name to Track-action.*/

  render() {
    return(
      <div className="Track">
        <div className="Track-information">
          <h3>{/*track name will go here */}</h3>
          <p>{/*track artist will go here | track album will go here*/}</p>
        </div>
        <a className="Track-action"> {/*+ or - will go here */}</a>
      </div>
    )
  }
}

export default Track;
