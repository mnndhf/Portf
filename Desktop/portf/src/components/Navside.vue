
  <template>
  <div class="navside">
    <div>
      <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Prist</a>
      </nav>
      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-2 d-none d-md-block bg-dark sidebar">
            <div class="sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    <span data-feather="home"></span>
                    <span class="sr-only">(current)</span>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="Group"></span>
                   GROUP
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="Application"></span>
                    APPLICATION
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="Application"></span>
                    USER
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="Application"></span>
                    GROUP MEMBER
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="Application"></span>
                    PROFILE
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    
      <div id="container" class="table-group">
      <div class="container">
        <b-row>
          <b-col md="4">
            <h2>GROUP</h2>
          </b-col>
          <b-col md="4" offset-md="4">
            <b-button @click="showModal2">Add</b-button>
          </b-col>
        </b-row>
         <div class="modalAdd">
            <b-modal ref="myModalRef2" hide-footer title="Add New Name and Email">
            <div class="text-center">
              <b-form-group id="ExampleInputGroup1" label="First Name" label-for="ExampleInput1">
                <b-form-input
                  id="ExampleInput1"
                  type="text"
                  placeholder="Enter First Name"
                  required
                  v-model="temp.name.first"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="ExampleInputGroup3" label="Last Name" label-for="ExampleInput3">
                <b-form-input
                  id="ExampleInput3"
                  type="text"
                  placeholder="Enter Last Name"
                  required
                  v-model="temp.name.last"
                  
                ></b-form-input>
              </b-form-group>

              <b-form-group id="ExampleInputGroup2" label="Email" label-for="ExampleInput2">
                <b-form-input
                  id="ExampleInput2"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  v-model="temp.email"
                ></b-form-input>
              </b-form-group>
            </div>
            <b-btn class="mt-3" variant="outline-success" @click="addTableRow()">Submit</b-btn>
          </b-modal>
         </div>
      </div>
        </div>

    <div class="container">
      <div class="table-responsive">
        <table class="table table-striped table-sm" id="tbUser">
          <thead>
            <!-- <tr v-for="(item, idx) in data" :key="idx"> -->
              <tr>
              <th>Name</th>
              <th>Email</th>
              <!-- <th>CreatorID</th> -->
              <th>Edit Manage</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in items" :key="idx">
              <td>{{ item.name.first }} {{ item.name.last }}</td>
              <td>{{ item.email }}</td>
              <!-- <td>{{ items.login.uuid }} </td>  -->
              <td> 
                <b-button variant="link" @click="deleteTableRow(idx)">Delete</b-button>
                <b-link href="#"> Edit </b-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      // Note 'isActive' is left out and will not appear in the rendered table
      items: [ { email: null, name: { first: null, last: null, title: null } }],
      temp: {email: null, name: { first: null, last: null, title: null } }
    };
  },
  props: ["data"],

//function untuk addtable

methods:  {
  
   addTableRow: function(idx) {
      this.counter++;
      this.items.push(
        this.temp
        );
      this.$refs.myModalRef2.hide();
    },
    
    showModal2() {
      this. temp = {email: null, name: { first: null, last: null, title: null } }
      this.$refs.myModalRef2.show();
    },
}
   

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-responsive {
  width: 1300px;
  
}
h2 {
  text-align: justify;
}
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 200; /* Behind the navbar */
  padding: 30px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
  text-align: justify;
  width: 200px;
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: white;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: white;
}

.sidebar .nav-link.active {
  color: white;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}

.table-group {
  margin-top: 100px;
  margin-left: 200px;
  text-align: center;
  width: 1200px;
}
</style>