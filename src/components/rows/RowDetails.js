import React from "react";
import { connect } from "react-redux";
import { getRow } from "../../actions/index";


class RowDetails extends React.Component {
  componentDidMount() {
    this.props.getRow(this.props.match.params.id)
  };

  render() {
    if (!this.props.row) {
      return <div>...Loading</div>;
    };

    const {plant, variety} = this.props.row;

    return (
      <div className="ui card centered">
        <div className="image">
          <img src={`https://source.unsplash.com/random/?${plant}`} alt={plant}/>
        </div>
        <div className="content">
          <div className="header">{plant}</div>
          <div className="meta">
            <span className="date">{variety}</span>
          </div>
          <div className="description">
            
          </div>
        </div>
        <div className="extra content">
          <div>
            <i className="calendar check outline icon"></i>
            Planted
          </div>
        </div>
        <div className="extra content">
          <div>
            <i className="calendar check icon"></i>
            Harvested
          </div>
        </div>
      </div> 
    );
  };  
};

const mapStateToProps = (state, ownProps) => {
  return {
    row: state.rows[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, {getRow})(RowDetails);