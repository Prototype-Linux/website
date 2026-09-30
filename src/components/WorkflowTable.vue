<script>
export default {
  name: "WorkflowTable",
  props: ["rows"]
}
</script>

<template>
  <div class="scroll">
    <table>
      <thead><tr><th>On Windows</th><th>Notes</th><th>On Prototype</th></tr></thead>
      <tbody>
        <tr v-for="r in rows" :key="r[0]"><td>{{ r[0] }}</td><td>{{ r[2] }}</td><td>{{ r[1] }}</td></tr>
      </tbody>
    </table>
  </div>
</template>
