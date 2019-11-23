<template>
  <div>
    <h1 class="is-size-1">Enrollment</h1>
    <div>
      <b-table
        :data="(isEmpty) ? [] : subjects"
        :loading="isLoading"
        paginated
        striped
        hoverable
        mobile-cards
        icon-pack="fas"
        sort-icon="chevron-up"
        aria-next-label="Next Page"
        aria-previous-label="Previous Page"
        aria-page-label="Page"
        aria-current-label="Current Page"
      >
        <template slot-scope="props">
          <b-table-column field="code" label="Code" sortable>
            {{ props.row.code }}
          </b-table-column>

          <b-table-column field="name" label="Subject" sortable>
            {{ props.row.name }}
          </b-table-column>

          <b-table-column field="teacher" label="Teacher" sortable>
            {{ props.row.teacher }}
          </b-table-column>

          <b-table-column centered>
            <template slot="header">
              <i class='fas fa-bars'></i>
            </template>

            <div>
              <template v-if="!isEnrolled">
                <b-button
                  title="Enroll"
                  type="is-info"
                  @click="enroll(props.row, props.index)"
                >
                  <i class="fas fa-plus"></i>
                </b-button>
              </template>

              <!-- Not being used -->
              <template v-else>
                <b-button
                  title="Remove"
                  type="is-danger"
                  outlined
                  @click="remove(props.row, props.index)"
                >
                  <i class="fas fa-times"></i>
                </b-button>
              </template>
            </div>
          </b-table-column>
        </template>

        <template slot="empty">
          <section
            v-if="isEmpty"
            class="section"
          >
              <div class="content has-text-grey has-text-centered">
                <p>
                  <b-icon
                    pack="far"
                    icon="frown"
                    size="is-large">
                  </b-icon>
                </p>
                <p>Nothing here.</p>
              </div>
          </section>
        </template>
      </b-table>      
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert';

export default {
  data() {
    return {
      isLoading: false,
      subjects: []
    }
  },
  computed: {
    isEmpty() {
      if (this.$store.state.subjects.length < 1) {
        return true
      } else {
        return false;
      }
    },
    isEnrolled() {
      this.$store.state.enrolledSubjects.map(subject => {
        if (subject.code === 'ESP101') {
          return true;
        } else {
          return false;
        }
      });
    }
  },
  mounted() {
    this.subjects = this.$store.state.subjects;
  },
  methods: {
    enroll(subject, index) {
      swal({
          title: 'Confirmación',
          text: `Asignatura inscrita correctamente`,
          icon: 'success'
      }); 
      this.$store.state.enrolledSubjects.splice(0, 0, subject);
      this.$store.state.subjects.splice(index, 1);
      return index;
    },

    // Not being used
    async remove(subject, index) {
      const confirmation = await swal({
        title: 'Confirmación',
        text: `¿Seguro que desea borrar la asignaturan '` + subject.code + `'?`,
        icon: 'warning',
        buttons: ['Cancelar', true],
        dangerMode: true
      });

      if (confirmation) {
        this.$store.state.enrolledSubjects.splice(index, 1);
        return index;
      }
    },
  }
}
</script>