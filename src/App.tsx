import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SidebarProvider } from '@/components/ui-kit/sidebar';
import { LoadingOverlay } from '@/components/core';
import { UsersTablePage } from '@/modules/iam';
import { EmailAgentPage } from '@/modules/email-agent';
import { MainLayout } from '@/layout/main-layout/main-layout';
import { Toaster } from '@/components/ui-kit/toaster';
import { ClientMiddleware } from '@/state/client-middleware';
import { ThemeProvider } from '@/styles/theme/theme-provider';
import './i18n/i18n';
import { AuthRoutes } from './routes/auth.route';
import { useLanguageContext, LanguageProvider } from './i18n/language-context';

const queryClient = new QueryClient();

function AppContent() {
  const { isLoading } = useLanguageContext();

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <div className="min-h-screen bg-background font-sans antialiased relative">
      <ClientMiddleware>
        <ThemeProvider>
          <SidebarProvider>
            <Routes>
              {AuthRoutes}
              <Route element={<MainLayout />}>

              <Route path="/" element={<Navigate to="/iam" replace />} />
              <Route path="/iam" element={<UsersTablePage />} />
              <Route path="/email-agent" element={<EmailAgentPage />} />
 
                {/* 
                To implement permissions for feature Invoices

                <Route
                  path="/invoices"
                  element={
                    <PermissionGuard
                      permissions={[MENU_PERMISSIONS.INVOICE_READ, MENU_PERMISSIONS.INVOICE_WRITE]}
                      fallbackType="dialog"
                    >
                      <InvoicesPage />
                    </PermissionGuard>
                  }
                />

                
                */}
                
              </Route>

              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </SidebarProvider>
        </ThemeProvider>
      </ClientMiddleware>
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider defaultLanguage="en-US" defaultModules={['common', 'auth']}>
          <AppContent />
        </LanguageProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
