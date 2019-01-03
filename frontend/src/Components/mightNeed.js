<tr id={entryObj.status === "active" ? "entry" : null}>
<td data-label="date">{this.state.selected? editText : formattedDate}</td>
<td data-label="start-time">{this.state.selected? editText : formattedStartTime}</td>


<td data-label="end_time">{entryObj.status === "active" ? formattedEndTime : "-"}</td>
<td data-label="time_left">{entryObj.status === "complete" ? "-":timeLeft}</td>

<td data-label="bloodSugar">{this.state.selected? editText : entryObj.current_blood_sugar !== null ? entryObj.current_blood_sugar : "-"}</td>
<td data-label="numUnits">{this.state.selected? editText : entryObj.num_units_insulin !== null ? entryObj.num_units_insulin : "-"}</td>

<td data-label="note">{this.state.selected? editText : entryObj.note === "" || entryObj.note === null ? "-":entryObj.note}</td>


<td data-label="status">{entryObj.status}</td>

  <td>
<button onClick={()=>this.handleEdit()}>edit</button>
<button onClick={(e)=>this.handleDelete(e)}>delete</button></td>
</tr>







<tr id={entryObj.status === "active" ? "entry" : null}>
<td data-label="date">{formattedDate}</td>
<td data-label="start-time">{formattedStartTime}</td>


<td data-label="end_time">{entryObj.status === "active" ? formattedEndTime : "-"}</td>
<td data-label="time_left">{entryObj.status === "complete" ? "-":timeLeft}</td>

<td data-label="bloodSugar">{entryObj.current_blood_sugar !== null ? entryObj.current_blood_sugar : "-"}</td>
<td data-label="numUnits">{entryObj.num_units_insulin !== null ? entryObj.num_units_insulin : "-"}</td>

<td data-label="note">{entryObj.note === "" || entryObj.note === null ? "-":entryObj.note}</td>


<td data-label="status">{entryObj.status}</td>

  <td>
<button onClick={()=>this.handleEdit()}>edit</button>
<button onClick={(e)=>this.handleDelete(e)}>delete</button></td>
</tr>
