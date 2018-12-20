const initialState = {
  loggedIn: false,
  auth: { currentUser: {id:'', username:''} },
  insulins:[],
  selectedInsulin: ''
}

const reducer = (state = initialState, action) =>{
  switch (action.type){

    case("SET_USER"):{
      console.log(action.payload)
      const userObj= {id:action.payload.id, username:action.payload.username}
      const currentUser = { currentUser: userObj }
      let defaultInsulin = ''
      if (action.payload.insulins_info[0] !== undefined){
        let defaultInsulin = action.payload.insulins_info[0].id
      }
      return {...state,
        auth:currentUser,
        insulins: action.payload.insulins_info,
        selectedInsulin: defaultInsulin
      }
    }

    case('LOG_IN_OUT'):{
      console.log(action.payload)
      return {...state, loggedIn: action.payload}
    }

      // case('EDIT_USER'):{
      //   console.log(action.payload)
      //   const userObj= {id:action.payload.id, username:action.payload.username}
      //   const currentUser = { currentUser: userObj }
      //
      // }





    case("SELECT_INSULIN"):{
      return {...state, selectedInsulin: action.payload}
    }
    case("REMOVE_INSULIN"):{
      const newInsulins = [...state.insulins].filter((insulin)=>{
        return insulin !== action.payload
          })
      return {...state, insulins: newInsulins}
    }
    case("ADD_INSULIN"):{
      const newInsulins = [...state.insulins, action.payload]
      return {...state, insulins: newInsulins}
    }




    case("REMOVE_ENTRY"):{
      const newInsulins = [...state.insulins].map((insulin)=>{
        if (insulin.id === action.payload.insulin_id){
          const newEntries = [...insulin.all_associated_entries].filter((entry)=>{
            return entry !== action.payload
          })
          return {...insulin, all_associated_entries: newEntries}
        }else{
          return {...insulin}
        }
      }
    )
      return {...state, insulins: newInsulins}
    }
    case("ADD_ENTRY"):{
      const newInsulins = [...state.insulins].map((insulin)=>{
        if (insulin.id === action.payload.insulin_id){
          const newEntries = [action.payload,...insulin.all_associated_entries]

          return {...insulin,all_associated_entries: newEntries}
        }else{
          return {...insulin}
        }
      }
    )
      return {...state, insulins: newInsulins}
    }



    default:
      return state
  }
}

export {reducer}
