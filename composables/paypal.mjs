import { loadScript } from '@paypal/paypal-js';

export const usePayPal = () => {
  const config = useRuntimeConfig();

  const loadPayPal = async () => {
    return await loadScript({
      clientId: config.public.paypalClientId,
      currency: 'USD',
      intent: 'capture'
    });
  };

  return { loadPayPal };
};