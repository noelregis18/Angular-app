const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { 
      path: 'dashboard', 
      component: DashboardComponent,
      canActivate: [AuthGuard],
      children: [
        { 
          path: 'admin', 
          component: AdminComponent,
          canActivate: [AdminGuard]
        }
      ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
  ];