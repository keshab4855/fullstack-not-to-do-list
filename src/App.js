import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="wrapper container ">
        {/* <!-- title --> */}
        <div class="title  text-center mt-5 mb-5">
          <h1>Weekly Hours Management</h1>
        </div>

        {/* <!-- Form -->
        <!-- javascript:void(0) helps to prevent the browser to load and this refers to the form --> */}
        <form action="javascript:void(0)" onsubmit="handleOnSubmit(this)">
          <div class="row g-3">
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                required
                placeholder="Task Name"
                name="task"
                aria-label="First name"
              />
            </div>
            <div class="col-md-3">
              <input
                type="number"
                class="form-control"
                name="hr"
                placeholder="Hours"
                required
                aria-label="Last name"
              />
            </div>
            <div class="col-md-3">
              <button
                type="submit"
                value="Add Task"
                class="form-control btn btn-primary"
                placeholder="Last name"
                aria-label="Last name"
              >
                Add task
              </button>
            </div>
            <hr />
          </div>
        </form>

        {/* <!-- left and right table --> */}
        <div class="row ">
          <div class="col-md-6 ">
            <div class="task-table">
              <h2 class="entry-list text-center py-3">Entry List</h2>
              <table class="table">
                <tbody id="entryList">
                  <tr class="text-center">
                    <td>Please input some Data!!</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-md-6 ">
            <div class="task-table">
              <h2 class="bad-list text-center py-3">Bad List</h2>
              <table class="table">
                <tbody id="badList">
                  <tr class="text-center">
                    <td>Please input some Data!!</td>
                  </tr>
                </tbody>
              </table>
              <h5 class="text-end">
                You could have saved <span id="badTtlHr"></span>
              </h5>
            </div>
          </div>
        </div>
        <div class="text-center mt-5 fs-1">
          Total weekly hours alocated = <span id="totalHours">0</span> hrs
        </div>
      </div>
    </div>
  );
}

export default App;
