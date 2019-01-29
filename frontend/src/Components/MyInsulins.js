import React from 'react';
import InsulinCard from './InsulinCard'
import {connect} from 'react-redux'
import {selectInsulin} from '../Redux/actions'

const MyInsulins = (props)=>{
  const generateInsulinCards=()=>{
    return props.insulins.map((insulinObj)=>{
      return <InsulinCard insulinObj={insulinObj} key={insulinObj.id}/>
    })
  }

    return(
      <div >
      <h1>My Insulins</h1>
      <div className="ui two column grid">

      {generateInsulinCards()}
      </div>
      </div>
    )
  }


const mapStateToProps= (state)=>{
  return {
    insulins: state.insulins,
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    selectInsulin:(insulin)=>dispatch(selectInsulin(insulin))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MyInsulins)
