type PropsType = {
  totalCount: number;
  pageSize: number;
  pageNum: number;
  setPageNum: (newPageNum: number) => void;
  setPageSize: (newPageSize: number) => void;
};

const Pagination = (props: PropsType) => {
  const pageSizes: number[] = [10, 25, 50, props.totalCount];
  const totalPages = Math.ceil(props.totalCount / props.pageSize);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        justifyContent: "center",
        flexDirection: "column",
        marginBottom: "25px",
        // position: "sticky",
        // top: 10,
        // zIndex: 1000,
      }}
    >
      {/*TODO: Add pagination styling to seperate buttons */}
      <div>
        <button
          onClick={() => props.setPageNum(1)}
          disabled={props.pageNum === 1}
        >
          {"<<"}
        </button>
        &nbsp;
        <button
          onClick={() => props.setPageNum(props.pageNum - 1)}
          disabled={props.pageNum === 1}
        >
          {"<"}
        </button>
        &nbsp;
        <span>
          Page {props.pageNum} of {totalPages}
        </span>
        &nbsp;
        <button
          onClick={() => props.setPageNum(props.pageNum + 1)}
          disabled={props.pageNum === totalPages}
        >
          {">"}
        </button>
        &nbsp;
        <button
          onClick={() => props.setPageNum(totalPages)}
          disabled={props.pageNum === totalPages}
        >
          {">>"}
        </button>
      </div>
      <div>
        Size:{" "}
        <select
          onChange={(e) => {
            const newPageSize = Number(e.target.value);
            props.setPageSize(newPageSize);
            if (props.pageNum > props.totalCount / newPageSize) {
              props.setPageNum(Math.ceil(props.totalCount / newPageSize));
            }
          }}
          value={props.pageSize}
        >
          {pageSizes.map((x) => {
            return (
              <option value={x}>{x !== props.totalCount ? x : "All"}</option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
