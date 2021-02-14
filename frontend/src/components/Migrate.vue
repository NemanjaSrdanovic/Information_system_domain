<template>
  <!--Section: Block Content-->
  <section style="margin-left: 15px; margin-right: 15px">
    <!--Grid row-->
    <div class="row">
      <!--Grid column-->
      <div class="col-lg-12" style="margin-top: 100px; margin-bottom: 450px">
        <!-- Card-->
        <div class="card bg-dark border-primary mb-3">
          <div class="card-body">
            <div class="progress">
              <b-progress-bar
                :value="progressNum"
                variant="primary"
                striped
                :animated="true"
              >
                <span v-if="progressNum == 100">
                  <strong> Successfully migrated to NoSql</strong>
                </span>
              </b-progress-bar>
            </div>

            <div
              style="text-align: center; margin-bottom: 10px; margin-top: 10px"
            >
              <div class="row" style="justify-content: center">
                <div class="col-lg-3 mb-5">
                  <button
                    :disabled="isDisabled()"
                    type="button"
                    class="btn btn-primary btn-block"
                    v-on:click="migrateToNoSQL()"
                  >
                    Migrate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Card -->
      </div>
      <!--Grid column-->
    </div>
    <!--Grid row-->
  </section>
  <!--Section: Block Content-->
</template>


<script>
import MigrationService from "@/services/MigrationService";
import AuthService from "@/services/AuthService";

export default {
  data() {
    return {
      progressNum: 0,
      userLoggedIn: false,
      employeeLoggedIn: false,
    };
  },
  methods: {
    migrateToNoSQL() {
      MigrationService.migrateToNoSQL()
        .then((response) => console.log(response))
        .catch((error) => {
          console.log(error);
        });
      this.setProgress();

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    },

    setProgress() {
      var i = 0;
      for (; i < 100; ++i) {
        this.progressNum++;
      }
    },

    isDisabled() {
      if (this.userLoggedIn == false && this.employeeLoggedIn==false) return false;
      else return true;
    },

    isUserLogedIn() {
      AuthService.isUserLogedIn()
        .then((response) => (this.userLoggedIn = response.data))
        .catch((error) => {
          console.log(error);
        });
    },

    isEmployeeLogedIn() {
      AuthService.isEmployeeLogedIn()
        .then((response) => (this.employeeLoggedIn = response.data))
        .catch((error) => {
          console.log(error);
        });
    },
  },

  beforeMount() {
    this.isUserLogedIn();
    this.isEmployeeLogedIn();

  },
};
</script>

<style scoped>
.progress {
  background-color: #252627;
  border-color: #0066ff;
  border-style: groove;
  height: 2rem;
}

.progressText {
  color: white;
  margin-top: 5px;
  align-self: center;
  justify-self: center;
}
</style>