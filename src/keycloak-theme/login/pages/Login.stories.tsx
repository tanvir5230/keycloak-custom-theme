import type { Meta, StoryObj } from '@storybook/react-vite';
import { createKcPageStory } from '../KcPageStory';

const { KcPageStory } = createKcPageStory({ pageId: 'login.ftl' });
const meta = { title: 'Authentication/Login', component: KcPageStory } satisfies Meta<typeof KcPageStory>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const InvalidCredentials: Story = {
  args: {
    kcContext: {
      messagesPerField: {
        existsError: (...fields: string[]) => fields.some(field => ['username', 'password'].includes(field)),
        getFirstError: () => 'Invalid username or password.'
      }
    }
  }
};
export const WithSocialProviders: Story = {
  args: {
    kcContext: {
      social: {
        providers: [
          { alias: 'google', providerId: 'google', displayName: 'Google', loginUrl: '#' },
          { alias: 'microsoft', providerId: 'microsoft', displayName: 'Microsoft', loginUrl: '#' }
        ]
      }
    }
  }
};
export const WithRegistration: Story = {
  args: { kcContext: { realm: { registrationAllowed: true }, registrationDisabled: false } }
};
export const UsernameHidden: Story = {
  args: { kcContext: { usernameHidden: true, login: { username: 'person@example.com' } } }
};
