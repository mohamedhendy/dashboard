module.exports = [
  // {
  //   type: 'item',
  //   isHeader: true,
  //   name: 'خيارات التنقل'
  // },
  {
    type: 'item',
    icon: 'fa fa-dashboard',
    name: 'الرئيسية',
    router: {
      name: 'Home'
    }
  },
  {
    type: 'item',
    icon: 'fas fa-cogs',
    name: 'الاعدادات',
    router: {
      name: 'Settings'
    }
  },
  {
    type: 'tree',
    icon: 'fas fa-user-tie',
    name: 'التحكم بالمشرفين',
    items: [
      {
        type: 'item',
        icon: 'fas fa-eye',
        name: 'عرض',
        router: {
          name: 'Supervisor'
        }
      },
      {
        type: 'item',
        icon: 'fas fa-plus',
        name: 'اضافة',
        router: {
          name: ''
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fas fa-users',
    name: 'التحكم بالأعضاء',
    items: [
      {
        type: 'item',
        icon: 'fas fa-eye',
        name: 'عرض',
        router: {
          name: 'Users'
        }
      },
      {
        type: 'item',
        icon: 'fas fa-plus',
        name: 'اضافة',
        router: {
          name: ''
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fas fa-cubes',
    name: 'التحكم بالأقسام',
    items: [
      {
        type: 'item',
        icon: 'fas fa-eye',
        name: 'عرض',
        router: {
          name: 'Sections'
        }
      },
      {
        type: 'item',
        icon: 'fas fa-plus',
        name: 'اضافة',
        router: {
          name: ''
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fas fa-th',
    name: 'التحكم بالمواضيع',
    items: [
      {
        type: 'item',
        icon: 'fas fa-eye',
        name: 'عرض',
        router: {
          name: 'Subjects'
        }
      },
      {
        type: 'item',
        icon: 'fas fa-plus',
        name: 'اضافة',
        router: {
          name: ''
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fas fa-file',
    name: 'التحكم بالصفحات',
    items: [
      {
        type: 'item',
        icon: 'fas fa-eye',
        name: 'عرض',
        router: {
          name: 'Pages'
        }
      },
      {
        type: 'item',
        icon: 'fas fa-plus',
        name: 'اضافة',
        router: {
          name: ''
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fas fa-bullhorn',
    name: 'التحكم بالبلاغات',
    items: [
      {
        type: 'item',
        icon: 'fas fa-eye',
        name: 'عرض',
        router: {
          name: 'Announcement'
        }
      },
      {
        type: 'item',
        icon: 'fas fa-plus',
        name: 'اضافة',
        router: {
          name: ''
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fas fa-link',
    name: 'التحكم بالروابط',
    items: [
      {
        type: 'item',
        icon: 'fas fa-eye',
        name: 'عرض',
        router: {
          name: 'Links'
        }
      },
      {
        type: 'item',
        icon: 'fas fa-plus',
        name: 'اضافة',
        router: {
          name: ''
        }
      }
    ]
  },
  {
    type: 'item',
    icon: 'fas fa-phone-alt',
    name: 'اتصل بنا',
    router: {
      name: 'ContactUs'
    }
  }
]
