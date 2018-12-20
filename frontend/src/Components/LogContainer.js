import React, { Component } from 'react';
// import {reducer} from '../Redux/reducer'
import {connect} from 'react-redux'
import {selectInsulin} from '../Redux/actions'
import InsulinLog from './InsulinLog'


class LogContainer extends Component{

  generateTabs=(insulins)=>{

    return insulins.map(insulinObj=>{

      return <div className={this.props.selectedInsulin === insulinObj.id ? "active item":"item"}
      onClick={()=> this.props.selectInsulin(insulinObj.id)}>
      {insulinObj.insulin_name}
      </div>
    })
  }


  render(){
    return(
      <div id='ins-log' >
      <div className="ui top attached tabular menu">

        {this.generateTabs(this.props.insulins)}
      </div>
      <InsulinLog/>
      </div>
    )
  }
}

const mapStateToProps= (state)=>{
  return {
    insulins: state.insulins,
    selectedInsulin: state.selectedInsulin
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    // fetchInsulins:()=>dispatch(fetchInsulins()),
    selectInsulin:(insulin)=>dispatch(selectInsulin(insulin))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(LogContainer)
