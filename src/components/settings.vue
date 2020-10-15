
 <template>
  <section class='content'>
    <div class='container'>
      <div class='row w-100 mx-0'>
        <div class='col-md-12'>
          <div class='d-flex align-items-center'>
            <div class='ml-3'>
              <h4 for='' class='font-weight-bold'>تشغيل</h4>
            </div>
            <div>
              <label class='switch'>
                <input type='checkbox' />
                <span class='slider round'></span>
              </label>
            </div>
          </div>
        </div>
        <div class='col-md-6'>
          <div class='form-group'>
            <label for=''>شعار الموقع</label>
            <input class='form-control' type='file' />
          </div>
        </div>
        <div class='col-md-6'>
          <div class='form-group'>
            <label for=''>ايقونة الموقع</label>
            <input class='form-control' type='file' />
          </div>
        </div>
        <div class='col-md-12'>
          <div class='form-group'>
            <label for=''>رسالة اغلاق الموقع</label>
            <textarea
              class='form-control'
              name=''
              id=''
              cols='30'
              rows='5'
            ></textarea>
          </div>
        </div>
      </div>

      <div >
        <h3 class='my-3'>بيانات اتصل بنا</h3>
        <div class='row mx-0 w-100'>
          <div class='col-md-4'>
            <div class='form-group'>
              <label for=''>الإسم</label>
              <input class='form-control' type='text' />
            </div>
          </div>
          <div class='col-md-4'>
            <div class='form-group'>
              <label for=''>الإيميل</label>
              <input class='form-control' type='email' />
            </div>
          </div>
          <div class='col-md-4'>
            <div class='form-group'>
              <label for=''>رقم التليفون</label>
              <input class='form-control' type='number' />
            </div>
          </div>
          <div class='col-md-12'>
            <div class='form-group'>
              <label for=''>نص الرسالة</label>
              <textarea
              class='form-control'
              name=''
              id=''
              cols='30'
              rows='5'
            ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Settings'
}
</script>      
<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
