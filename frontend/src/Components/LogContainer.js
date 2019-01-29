import React from 'react';
// import {reducer} from '../Redux/reducer'
import {connect} from 'react-redux'
import {selectInsulin} from '../Redux/actions'
import InsulinLog from './InsulinLog'


const LogContainer=(props)=>{

   const generateTabs=(insulins)=>{

    return insulins.map(insulinObj=>{

      return <div className={props.selectedInsulin === insulinObj.id ? "active item":"item"}
      onClick={()=> props.selectInsulin(insulinObj.id)}>
      {insulinObj.insulin_name}
      </div>
    })
  }

    return(
      <div id='ins-log' >
      <div className="ui top attached tabular menu">

        {generateTabs(props.insulins)}
      </div>
      <InsulinLog/>
      </div>
    )
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
