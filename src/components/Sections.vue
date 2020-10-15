
 <template>
  <section class='content'>
    <div class="container">
        <h3 class="mb-4">التحكم بالأقسام</h3>
        <div>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">إجراء</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td>
                            <button class="btn btn-sm btn-warning"><i class="fas fa-eye"></i></button>
                            <button class="btn btn-sm btn-info"><i class="fas fa-edit"></i></button>
                            <button class="btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Sections'
}
</script>      
<style>

</style>
