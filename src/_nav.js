import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilSchool,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'داشبرد',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'پروفایل',
  },
  {
    component: CNavGroup,
    name: 'اطلاعات من',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'مشاهده اطلاعات',
        to: '/employee-info/',
      },
      {
        component: CNavItem,
        name: 'ویرایش اطلاعات',
        to: '/update-info',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'کاربران',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'نمایش همه ادمین ها',
        to: '/all-employees',
      },
      {
        component: CNavItem,
        name: 'نمایش همه معلم ها',
        to: '/all-teachers',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'امکانات',
  },
  {
    component: CNavGroup,
    name: 'دوره ها',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'نمایش همه دوره ها',
        to: '/all-courses',
      },
      {
        component: CNavItem,
        name: 'اضافه کردن دوره جدید',
        to: '/create-course',
      },
      {
        component: CNavItem,
        name: 'حذف دوره',
        to: '/all-courses',
      },
      {
        component: CNavItem,
        name: 'بروزرسانی دوره',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'نظرات',
        to: '/comments',
      },
      // {
      //   component: CNavItem,
      //   name: 'Collapse',
      //   to: '/base/collapses',
      // },
      // {
      //   component: CNavItem,
      //   name: 'List group',
      //   to: '/base/list-groups',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Navs & Tabs',
      //   to: '/base/navs',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Pagination',
      //   to: '/base/paginations',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Popovers',
      //   to: '/base/popovers',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Progress',
      //   to: '/base/progress',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Spinners',
      //   to: '/base/spinners',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Tables',
      //   to: '/base/tables',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Tooltips',
      //   to: '/base/tooltips',
      // },
    ],
  },
  // {
  //   component: CNavGroup,
  //   name: 'Buttons',
  //   to: '/buttons',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Dropdowns',
  //       to: '/buttons/dropdowns',
  //     },
  //   ],
  // },
  {
    component: CNavGroup,
    name: 'مقالات',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'نمایش همه مقالات',
        to: '/all-news',
      },
      {
        component: CNavItem,
        name: 'اضافه کردن مقاله جدید',
        to: '/create-news',
      },
      {
        component: CNavItem,
        name: 'حذف مقاله',
        to: '/all-news',
      },
      {
        component: CNavItem,
        name: 'بروزرسانی مقاله',
        to: '/all-news',
      },
      // {
      //   component: CNavItem,
      //   name: 'Input Group',
      //   to: '/forms/input-group',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Floating Labels',
      //   to: '/forms/floating-labels',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Layout',
      //   to: '/forms/layout',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Validation',
      //   to: '/forms/validation',
      // },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  {
    component: CNavGroup,
    name: 'ترم ها',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'نمایش همه ترم ها',
        to: '/all-terms',
        // badge: {
        //   color: 'success',
        //   text: 'NEW',
        // },
      },
      {
        component: CNavItem,
        name: 'اضافه کردن  ترم جدید',
        to: '/create-term',
      },
      {
        component: CNavItem,
        name: 'حذف ترم',
        to: '/all-terms',
      },
      {
        component: CNavItem,
        name: 'بروزرسانی ترم',
        to: '/all-terms',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'دانشجویان',
    icon: <CIcon icon={cilSchool} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'نمایش تمامی دانشجویان',
        to: '/all-students',
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
]

export default _nav
