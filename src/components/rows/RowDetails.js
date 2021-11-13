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
        <div class="image">
          <img src={`https://source.unsplash.com/random/?${plant}`}/>
        </div>
        <div class="content">
          <a class="header">{plant}</a>
          <div class="meta">
            <span class="date">{variety}</span>
          </div>
          <div class="description">
            
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="leaf icon"></i>
            Planted
          </a>
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