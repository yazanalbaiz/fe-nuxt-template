import router from '@/router';
import i18n from '@/plugins/i18n';

export default class AxiosInterceptionService {
  constructor(i18n) {}

  numberOfVisibleToasts = 0;
  maxNumberOfVisibleToasts = 1;
  toastTimeout = 2500;

  options = {
    position: 'top-center',
    timeout: this.toastTimeout,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: 'button',
    icon: true,
    rtl: true,
  };

  requestConfigInterceptor() {
  }

  requestErrorInterceptor() {}

  async responseInterceptor(response) {
    this.handleResponse(response);
  }

  responseErrorInterceptor(error) {
    this.handleResponseErrors(error.response);
  }

  handleResponse(response) {
    
    if (response.status === 401) {
      const loginUrl = `/api/account/login?returnUrl=${window.location.href.replace(window.location.origin, '')}`;
      router.push(
        loginUrl,
        () => {
          router.go();
        }
      );
    }

    if (this.numberOfVisibleToasts >= this.maxNumberOfVisibleToasts) {
      return;
    }
    if (response.status === 403) {
      window.$toast.error('ليس لديك صلاحية لعرض هذه البيانات');
      this.numberOfVisibleToasts++;
      setTimeout(() => {
        this.numberOfVisibleToasts--;
      }, this.toastTimeout);
    }

    if (response.status === 500) {
      window.$toast.error(i18n.t('messages.connection_error'));
      this.numberOfVisibleToasts++;
      setTimeout(() => {
        this.numberOfVisibleToasts--;
      }, this.toastTimeout);
    }
  }

  handleResponseErrors(response) {

    if (!response) {
      const loginUrl = `/api/account/login?returnUrl=${window.location.href.replace(window.location.origin, '')}`;
      router.push(
        loginUrl,
        () => {
          router.go();
        }
      );
    }

    if (response.status === 401) {
      const loginUrl = `/api/account/login?returnUrl=${window.location.href.replace(window.location.origin, '')}`;
      router.push(
        loginUrl,
        () => {
          router.go();
        }
      );
    }

    if (this.numberOfVisibleToasts >= this.maxNumberOfVisibleToasts) {
      return;
    }
    
    if (response.status === 403 && !response.config.url.includes('surveys/Coded-Survey')) {
      window.$toast.error('ليس لديك صلاحية لعرض هذه البيانات');
      this.numberOfVisibleToasts++;
      setTimeout(() => {
        this.numberOfVisibleToasts--;
      }, this.toastTimeout);
    }

    if (
      response.status === 500 &&
      // The following conditions take care of 500 errors on
      // Question Option editing that occur during the deletion
      // of an option.
      response.config.url !== 'questionsoptions' &&
      !response.config.url.includes('questionsconditions/') &&
      response.config.method !== 'put'
    ) {
      console.log(response.config.url)
      window.$toast.error(i18n.t('messages.connection_error'));
      this.numberOfVisibleToasts++;
      setTimeout(() => {
        this.numberOfVisibleToasts--;
      }, this.toastTimeout);
    }
  }
}
