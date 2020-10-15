 <template>
  <section class="content">
    <div class="row kufi">
      <div class="col-lg-3 col-6">
        <div class="small-box bbg-1">
          <div class="inner p-2 text-white">
            <h5>4</h5>
            <p class="mb-0">المرضى</p>
          </div>
          <div class="icon icon-crt"><i class="fas fa-bed"></i></div>
          <div>
            <small
              ><a
                href="/host3/public/admin/patients"
                class="text-white d-block px-2 py-1 link-crt"
                ><i class="far fa-arrow-alt-circle-left"></i> عرض المزيد
              </a></small
            >
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-6">
        <div class="small-box bbg-2">
          <div class="inner p-2 text-white">
            <h5>8</h5>
            <p class="mb-0">الموظفين</p>
          </div>
          <div class="icon icon-crt"><i class="fas fa-users"></i></div>
          <div>
            <small
              ><a
                href="/host3/public/admin/employees"
                class="text-white d-block px-2 py-1 link-crt"
                ><i class="far fa-arrow-alt-circle-left"></i> عرض المزيد
              </a></small
            >
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-6">
        <div class="small-box bbg-3">
          <div class="inner p-2 text-white">
            <h5>3</h5>
            <p class="mb-0">الاقسام</p>
          </div>
          <div class="icon icon-crt"><i class="fas fa-cube"></i></div>
          <div>
            <small
              ><a
                href="/host3/public/admin/categories"
                class="text-white d-block px-2 py-1 link-crt"
                ><i class="far fa-arrow-alt-circle-left"></i> عرض المزيد
              </a></small
            >
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-6">
        <div class="small-box bbg-4">
          <div class="inner p-2 text-white">
            <h5>2</h5>
            <p class="mb-0">التقارير</p>
          </div>
          <div class="icon icon-crt"><i class="fas fa-file-alt"></i></div>
          <div>
            <small
              ><a
                href="/host3/public/admin/Reports"
                class="text-white d-block px-2 py-1 link-crt"
                ><i class="far fa-arrow-alt-circle-left"></i> عرض المزيد
              </a></small
            >
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-6">
        <div class="small-box bbg-5">
          <div class="inner p-2 text-white">
            <h5>2</h5>
            <p class="mb-0">المواعيد</p>
          </div>
          <div class="icon icon-crt"><i class="far fa-calendar-alt"></i></div>
          <div>
            <small
              ><a
                href="/host3/public/admin/Dates"
                class="text-white d-block px-2 py-1 link-crt"
                ><i class="far fa-arrow-alt-circle-left"></i> عرض المزيد
              </a></small
            >
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-6">
        <div class="small-box bbg-6">
          <div class="inner p-2 text-white">
            <h5>0</h5>
            <p class="mb-0">اسال طبيبك</p>
          </div>
          <div class="icon icon-crt"><i class="fas fa-user-md"></i></div>
          <div>
            <small
              ><a
                href="/host3/public/admin/asks"
                class="text-white d-block px-2 py-1 link-crt"
                ><i class="far fa-arrow-alt-circle-left"></i>
                عرض المزيد
              </a></small
            >
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-6">
        <div class="small-box bbg-7">
          <div class="inner p-2 text-white">
            <h5>0</h5>
            <p class="mb-0">شاركنا رأيك</p>
          </div>
          <div class="icon icon-crt"><i class="fas fa-bullhorn"></i></div>
          <div>
            <small
              ><a
                href="/host3/public/admin/complaints"
                class="text-white d-block px-2 py-1 link-crt"
                ><i class="far fa-arrow-alt-circle-left"></i> عرض المزيد
              </a></small
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Home'
}
</script>      
<style>
.bbg-1 {
    background-color: #4b9fe6;
}
.bbg-2 {
    background-color: #4da9b1;
}
.bbg-3 {
    background-color: #9c4db1;
}
.bbg-4 {
    background-color: #ca9f1f;
}
.bbg-5 {
    background-color: #8BC34A;
}
.bbg-6 {
    background-color: #485c79;
}
.bbg-7 {
    background-color: #b14d4d;
}
.small-box {
    border-radius: .25rem;
    box-shadow: 0 0 1px rgba(0,0,0,.125), 0 1px 3px rgba(0,0,0,.2);
    position: relative;
    display: block;
    margin-bottom: 20px;
}
.small-box .icon {
    font-size: 40px;
    margin-top: 15px !important;
}
.small-box .icon {
    right: auto;
    left: 10px;
}
.small-box .icon-crt {
    color: #ffffffd9!important;
}
.link-crt {
    background-color: rgba(0,0,0,.1);
}
.kufi {
    font-family: 'DroidArabicKufiRegular';
}
.small-box:hover .icon {
    font-size: 50px;
}
.pt-2 > button {
    margin-bottom: 10px;
}
.text-white {
    color: #FFF !important;
}
</style>
