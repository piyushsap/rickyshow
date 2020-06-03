<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3 filter-head">
        <h2>Filters</h2>
      </div>
      <div class="col-sm-9">
        <div class="row search-area">
          <div class="search-box col-9">
            <form class="form-inline">
              <Formgroup
                :group-class="'input-group'"
                :label="formLabel"
                :textbox="formTextbox"
                @inputVal="search"
              />
            </form>
          </div>
          <div class="sort-box col-3">
            <select
              v-model="sortDirection"
              class="form-control"
              @change="sortCharacters"
            >
              <option value="ASC">Ascending</option>
              <option value="DESC">Descending</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-sm-3 filters">
        <FilterBox
          v-for="(filter, index) in filters"
          :key="index"
          :heading="{ text: filter.heading, tag: 'h4' }"
          :optionsval="filter.options"
          :filterbox-class="'mb-2'"
          @selected="selectedFilter"
        >
          {{ filter }}
        </FilterBox>
      </div>
      <div class="col-sm-9">
        <div class="row">
          <div class="col-12 selected-filters">
            <h2 class="mb-3 mt-3">Selected Filters</h2>
            <div
              v-for="(category, categoryIndex) in selectedFilters"
              :key="categoryIndex"
              class="badges"
            >
              <span v-if="category.length > 0">{{ categoryIndex }} :</span>
              <Button
                v-for="(selected, index) in category"
                :key="index"
                :as="'a'"
                :btn-class="'badge badge-info'"
                :href="'javascript:void(0)'"
                @click="removeFilter(categoryIndex, selected)"
                >{{ selected }} <img src="~/assets/close.svg"
              /></Button>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div
            v-for="character in rederCharacter"
            :key="character.id"
            class="col-sm-4 mb-3"
          >
            <Card>
              <img
                :src="character.image"
                class="card-img-top"
                :alt="character.name"
              />
              <div class="card-content">
                <h5 class="card-title">{{ character.name }}</h5>
                <table>
                  <tr>
                    <th>Status</th>
                    <td>{{ character.status }}</td>
                  </tr>
                  <tr>
                    <th>Species</th>
                    <td>{{ character.species }}</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>{{ character.gender }}</td>
                  </tr>
                  <tr>
                    <th>Origin</th>
                    <td>{{ character.origin.name }}</td>
                  </tr>
                  <tr>
                    <th>Last Location</th>
                    <td>{{ character.origin.location }}</td>
                  </tr>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>

<style src="./index.css"></style>
