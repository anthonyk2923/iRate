<template>
  <div
    id="leftcol"
    class="list-group w-25"
    style="border-color: #000000; border-right: solid"
    data-search
  >
    <hr />
    <input
      type="text"
      class="form-input p-3 m-2 rounded border"
      id="search"
      placeholder="Search teachers..."
    />
    <TeacherNavItem
      v-for="i in orgData"
      :key="i"
      :data="i"
      @BtnClick="handleClick"
    />
    <div
      style="padding-left: 15%; padding-right: 15%; border: none; margin: 4px"
      class=""
    >
      <button
        type="button"
        class="linkbadge badge-primary bg-dark text-light rounded"
        style="border: none"
        @click="changeTeacherForm"
      >
        Not seeing a teacher? click here
      </button>
    </div>
    <form v-show="showTeacherForm" id="TeacherFormContainer" align="center">
      <!-- method="POST" action="/api/teachers" -->
      <label style="padding-left: 10px">First and Last name: </label>
      <input
        name="name"
        required
        type="text"
        id="teacherForm"
        onclick="this.value='';this.style.color='aliceblue';"
        class="form-input p-3 rounded border bg-dark text-light"
        maxlength="20"
        placeholder="Jhon Doe"
      />
      <br />
      <small><em>press enter to submit</em> </small>
    </form>
    <hr id="hr" />
  </div>
  <div id="content">
    <hr />
    <div v-if="currentData != null" align="right" class="m-3">
      <button
        type="button"
        class="linkbadge badge-primary bg-success text-light rounded"
        style="border: none"
        @click="showFormReview = !showFormReview"
      >
        Toggle review form
      </button>
      <button
        class="linkbadge badge-primary bg-danger text-light rounded m-2"
        style="border: none"
        onclick="location.reload()"
      >
        Refresh reviews
      </button>
    </div>
    <form
      v-show="showFormReview"
      style="margin-left: 10%; margin-right: 10%"
      id="RatingFormContainer"
    >
      <div class="form-group">
        <label for="name">Name(optional):</label>
        <input
          name="name"
          type="text"
          class="form-control"
          id="nameForm"
          placeholder="John Doe"
        />
      </div>
      <div class="form-group">
        <label class="rating-label">
          Drag to edit value:
          <input
            id="ratingForm"
            class="rating rating--nojs"
            max="5"
            step=".5"
            type="range"
            value="3"
            required
          />
        </label>
      </div>

      <div class="form-group">
        <label for="bodyForm">Body:</label>
        <textarea
          name="bodyForm"
          class="form-control"
          id="bodyForm"
          rows="3"
          placeholder="My teacher sucks!"
          required
        ></textarea>
      </div>

      <div align=" center" class="form-group">
        <button
          type="submit"
          class="linkbadge badge-primary bg-dark text-light rounded m-3 p-2"
          style="border: none"
        >
          Submit
        </button>
      </div>
    </form>
    <hr />
    <TeacherContent v-if="currentData !== null" :currentData="currentData" />
    <h1 v-if="currentData == null" align="center">
      <i class="display-1"
        >no teacher has selected
        <div
          style="
            border: 20px;
            border: solid;
            margin-bottom: 20px;
            margin-right: 5%;
            margin-left: 3%;
          "
        ></div>
        <img style="padding-right: 45%" src="../assets/arrow.webp" />
      </i>
    </h1>
  </div>
</template>
<script>
/* eslint-disable no-unused-vars */
import TeacherNavItem from "../components/TeacherNavItem.vue";
import TeacherContent from "../components/TeacherContent.vue";
import { useToast } from "vue-toastification";
export default {
  data() {
    return {
      orgData: null,
      teachersData: null,
      currentData: null,
      showTeacherForm: false,
      showFormReview: false,
    };
  },
  components: {
    TeacherNavItem,
    TeacherContent,
  },
  methods: {
    handleClick(data, id) {
      this.currentData = data;
      this.currentId = id;
    },
    async getData() {
      const data = await fetch("/api/teachers");
      this.teachersData = JSON.parse(JSON.stringify(await data.json()));
    },
    async runfunc() {
      await this.getData();
      this.orgData = this.teachersData;
    },
    changeTeacherForm() {
      this.showTeacherForm = !this.showTeacherForm;
      document.getElementById("hr").scrollIntoView();
    },
  },
  mounted() {
    const toast = useToast();
    this.runfunc();
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", (e) => {
      this.orgData = [];
      const value = e.target.value.toLowerCase();
      this.teachersData.forEach((teacher) => {
        let isVisable = null;
        isVisable = teacher.name.toLowerCase().includes(value);
        if (isVisable == true) {
          this.orgData.push(teacher);
        }
      });
    });

    const form = document
      .getElementById("TeacherFormContainer")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        const value = document
          .getElementById("teacherForm")
          .value("/api/teachers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: value }),
          })
          .then((res) => {
            if (res.status == 200) {
              toast.success(
                "Successfully submited form, new teacher will apear soon!",
                {
                  position: "top-center",
                  timeout: 5000,
                  closeOnClick: true,
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  draggable: true,
                  draggablePercent: 0.6,
                  showCloseButtonOnHover: false,
                  hideProgressBar: true,
                  closeButton: "button",
                  icon: true,
                  rtl: false,
                }
              );
            }

            if (res.status == 400) {
              toast.error(
                "Something went wrong, check if the teacher is already added",
                {
                  position: "top-center",
                  timeout: 5000,
                  closeOnClick: true,
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  draggable: true,
                  draggablePercent: 0.6,
                  showCloseButtonOnHover: false,
                  hideProgressBar: true,
                  closeButton: "button",
                  icon: true,
                  rtl: false,
                }
              );
            }
          });
      });
    const ratingForm = document.getElementById("RatingFormContainer");

    ratingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let ratingFormData = {
        teacher: this.currentId,
        name: document.getElementById("nameForm").value,
        score: document.getElementById("ratingForm").value,
        body: document.getElementById("bodyForm").value,
      };
      fetch("/api/ratings", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ratingFormData),
      })
        .then((res) => res)
        .then((res) => {
          if (res.status == 200) {
            toast.success(
              "Successfully submited form, new teacher will apear soon!",
              {
                position: "top-center",
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: "button",
                icon: true,
                rtl: false,
              }
            );
          }
          console.log(res.json());

          if (res.status == 400) {
            toast.error(
              "Something went wrong, check if the you filled out all fields ",
              {
                position: "top-center",
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: "button",
                icon: true,
                rtl: false,
              }
            );
          }
        });
    });
  },
};
</script>
<style>
#leftcol {
  position: fixed;
  background-color: #ddd;
  overflow-y: scroll;
  bottom: 0;
  top: 9%;
  width: 25%;
}

#content {
  position: relative;
  margin-left: 26%;
}

.hide {
  display: none;
}

.rating {
  --dir: right;
  --fill: gold;
  --fillbg: rgba(100, 100, 100, 0.15);
  --heart: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21.328l-1.453-1.313q-2.484-2.25-3.609-3.328t-2.508-2.672-1.898-2.883-0.516-2.648q0-2.297 1.57-3.891t3.914-1.594q2.719 0 4.5 2.109 1.781-2.109 4.5-2.109 2.344 0 3.914 1.594t1.57 3.891q0 1.828-1.219 3.797t-2.648 3.422-4.664 4.359z"/></svg>');
  --star: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"/></svg>');
  --stars: 5;
  --starsize: 3rem;
  --symbol: var(--star);
  --value: 1;
  --w: calc(var(--stars) * var(--starsize));
  --x: calc(100% * (var(--value) / var(--stars)));
  block-size: var(--starsize);
  inline-size: var(--w);
  position: relative;
  touch-action: manipulation;
  -webkit-appearance: none;
  appearance: none;
}

[dir="rtl"] .rating {
  --dir: left;
}

.rating::-moz-range-track {
  background: linear-gradient(
    to var(--dir),
    var(--fill) 0 var(--x),
    var(--fillbg) 0 var(--x)
  );
  block-size: 100%;
  mask: repeat left center/var(--starsize) var(--symbol);
}

.rating::-webkit-slider-runnable-track {
  background: linear-gradient(
    to var(--dir),
    var(--fill) 0 var(--x),
    var(--fillbg) 0 var(--x)
  );
  block-size: 100%;
  mask: repeat left center/var(--starsize) var(--symbol);
  -webkit-mask: repeat left center/var(--starsize) var(--symbol);
}

.rating::-moz-range-thumb {
  height: var(--starsize);
  opacity: 0;
  width: var(--starsize);
}

.rating::-webkit-slider-thumb {
  height: var(--starsize);
  opacity: 0;
  width: var(--starsize);
  -webkit-appearance: none;
}

.rating,
.rating-label {
  display: block;
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.rating-label {
  margin-block-end: 1rem;
}

/* NO JS */
.rating--nojs::-moz-range-track {
  background: var(--fillbg);
}

.rating--nojs::-moz-range-progress {
  background: var(--fill);
  block-size: 100%;
  mask: repeat left center/var(--starsize) var(--star);
}

.rating--nojs::-webkit-slider-runnable-track {
  background: var(--fillbg);
}

.rating--nojs::-webkit-slider-thumb {
  background-color: var(--fill);
  box-shadow: calc(0rem - var(--w)) 0 0 var(--w) var(--fill);
  opacity: 1;
  width: 1px;
}

[dir="rtl"] .rating--nojs::-webkit-slider-thumb {
  box-shadow: var(--w) 0 0 var(--w) var(--fill);
}
</style>