export default function AllTodos(props) {
  const {lists1, lists2} = props
  return (
    <div>
      <h2>Todo Lists</h2>
      <div className="border mx-5 my-3 py-3">
        <h3 className="text-info">Monday</h3>
        {lists1.map((list1) => {
          return <div>{list1.text}</div>;
        })}
        <button onClick={()=>props.onSort(lists1, "asc")} className="mx-1 mt-2 bg-info text-white border-0">Rush</button>
        <button onClick={()=>props.onSort(lists1, "desc")} className="mx-1 mt-2 bg-info text-white border-0">Relax</button>
      </div>
      <div className="border mx-5 my-3 py-3">
        <h3 className="text-info">Tuesday</h3>
        {lists2.map((list2) => {
          return <div>{list2.text}</div>;
        })}
        <button onClick={()=>props.onSort(lists2, "asc")} className="mx-1 mt-2 bg-info text-white border-0">Rush</button>
        <button onClick={()=>props.onSort(lists2, "desc")} className="mx-1 mt-2 bg-info text-white border-0">Relax</button>
      </div>
    </div>
  );
}
