import Pagination from '@mui/material/Pagination'


const PaginationComponent = ({ page, handlePage, totalPages }) => {

  return (
    <>
    <Pagination
      sx={{
        '.MuiPagination-ul': {
          display: 'flex',
          justifyContent: 'center',
          marginTop: "40px",
        },
      }}
      color='#f7eddb'
      className='text-center'
      count={totalPages}
      page={page}
      onChange={handlePage}
    />

    {/* <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "3em",
    }} 
  >
     */}
    {/* <div className="importDevStyle" style={{}}>
      <img src={ArrowLeft} className="" />
      <div className="importStyle">Previous</div>
    </div>
    <div>
      <div className="flexClsCopy2">
        {[1, 2, 3, "...", 8, 9, 10].map((item, index) => (
          <div
            className={curentIndex2 === index ? "activeCls" : "itemCls"}
            onClick={() => setIndexC2(index)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
    <div className="importDevStyle" style={{}}>
      <div className="importStyle">Next </div>
      <img src={ArrowRight} className="" />
    </div>
  </div> */}


    </>

  )
}

export default PaginationComponent
