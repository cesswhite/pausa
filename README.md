![pausa_cover_image](https://res.cloudinary.com/dpvsklksg/image/upload/Eco-Assets/Screenshot_2025-06-20_at_4.05.02_p.m._m9islr.png)

# Pausa: Complete Authentication Starter Template for Nuxt 3

**Pausa** is a modern web application built with **Nuxt 3** that serves as a **complete authentication template** and **starter kit** for developers. It provides a robust authentication flow that can be integrated into any application in seconds.

## 🎯 **Main Purpose**

Pausa is a **complete authentication solution** that allows developers to integrate a robust authentication flow into their applications in seconds. It functions as a **starter template** that includes everything needed to handle user authentication and management.

## 🏗️ **Technical Architecture**

### **Technology Stack:**

- **Frontend**: Nuxt 3 (Vue 3) with TypeScript
- **UI Framework**: Nuxt UI v3 (based on Tailwind CSS)
- **Database**: Supabase (PostgreSQL + Auth)
- **Global State**: Pinia
- **Animations**: VueUse Motion
- **State Management**: Composables + Stores

### **Built on cutting-edge technologies:**

- Nuxt 3 for powerful, streamlined development
- Nuxt UI v3 for customizable and sleek UI components
- Pinia for state management simplicity
- Tailwind CSS v4 for responsive and modern design
- Supabase for backend-as-a-service with authentication
- Fully compatible with the Nuxt v4 folder structure

## 📁 **Project Structure**

```
app/
├── components/
│   ├── Auth/          # Complete authentication components
│   ├── Dashboard/     # Dashboard components
│   ├── Landing/       # Landing page components
│   └── App/          # General app components
├── layouts/          # Layouts for different sections
├── pages/           # Application routes
├── stores/          # Global state with Pinia
├── middleware/      # Authentication middleware
└── composables/     # Reusable logic
```

## 🔐 **Authentication System**

### **Implemented Features:**

- ✅ User registration with email/password
- ✅ Traditional login
- ✅ Social provider authentication
- ✅ Password recovery
- ✅ Magic links
- ✅ Route protection middleware
- ✅ Session management with Supabase

### **Authentication Flow:**

1. **Landing Page** → Redirects to dashboard if already authenticated
2. **Sign Up** → Registration with password validation
3. **Sign In** → Login with multiple options
4. **Dashboard** → Protected area with sidebar and navigation

## 🎨 **User Interface**

### **UI/UX Features:**

- **Responsive Design**: Adaptable to mobile and desktop
- **Dark/Light Mode**: Automatic toggle
- **Smooth Animations**: Transitions with VueUse Motion
- **Reusable Components**: Based on Nuxt UI v3
- **Collapsible Sidebar**: Adaptive navigation
- **Validated Forms**: With visual feedback

## 🔧 **Configuration and Features**

### **Key Configuration:**

- **SEO Optimized**: Automatic meta tags
- **Strict TypeScript**: Complete typing
- **Hot Module Replacement**: Fast development
- **Auto-imports**: Automatic Nuxt configuration
- **Tailwind CSS v4**: Modern styling

## 📊 **State and Data Management**

### **Global State:**

- **Pinia Store**: For authentication data
- **Composables**: For reusable logic
- **Supabase Client**: Direct database integration

## 🚀 **Project Strengths**

1. **Completeness**: Complete and functional auth system
2. **Modernity**: Updated technology stack
3. **Scalability**: Modular and extensible architecture
4. **UX/UI**: Modern and accessible interface
5. **Developer Experience**: Optimized configuration
6. **Documentation**: Detailed README

## 🎯 **Use Cases**

### **Ideal for:**

- Startups needing quick authentication
- MVPs with authentication requirements
- Projects requiring login/registration
- Templates for developers
- Basic SaaS applications

## 📈 **Improvement Potential**

### **Expansion Areas:**

- More authentication providers
- Advanced user profiles
- Roles and permissions
- Real-time notifications
- Integrated analytics

## 🛠️ **Project Setup**

### **Prerequisites**

- Node.js (>= 14.x)
- npm or yarn
- **Supabase Account**: You need to have a Supabase account and be familiar with creating projects
- **OAuth Providers Setup**: Familiarity with creating OAuth applications for Google and GitHub

### **Required Accounts & Setup**

#### **1. Supabase Account**

- Create a free account at [Supabase](https://supabase.com)
- Create a new project in your Supabase dashboard
- Familiarize yourself with the Supabase dashboard and API settings

#### **2. Google OAuth Setup**

- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Create a new project or select an existing one
- Enable the Google+ API
- Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
- Set up authorized redirect URIs: `https://your-project.supabase.co/auth/v1/callback`
- Copy your **Client ID** and **Client Secret**

#### **3. GitHub OAuth Setup**

- Go to [GitHub Developer Settings](https://github.com/settings/developers)
- Click "New OAuth App"
- Set the Authorization callback URL: `https://your-project.supabase.co/auth/v1/callback`
- Copy your **Client ID** and **Client Secret**

#### **4. Configure OAuth in Supabase**

- In your Supabase dashboard, go to "Authentication" → "Providers"
- Enable and configure Google and GitHub providers
- Add the Client IDs and Client Secrets from the previous steps

### **Installation**

1. Clone the repository:

   ```sh
   git clone https://github.com/{username}/pausa.git
   cd pausa
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```env
   # Supabase Configuration
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_KEY=your_supabase_anon_key

   # Site Configuration
   NUXT_SITE_URL=http://localhost:3000
   ```

   **How to get Supabase credentials:**

   1. Go to [Supabase](https://supabase.com) and create a new project
   2. Navigate to Settings → API in your Supabase dashboard
   3. Copy the "Project URL" and "anon/public" key
   4. Replace `your_supabase_project_url` and `your_supabase_anon_key` with your actual values

   **Important Notes:**

   - The OAuth providers (Google and GitHub) are configured directly in your Supabase dashboard
   - No additional environment variables are needed for OAuth as Supabase handles the configuration
   - Make sure you've completed the OAuth setup steps above before testing social login

   **For production:**

   ```env
   # Production environment variables
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_KEY=your_supabase_anon_key
   NUXT_SITE_URL=https://yourdomain.com
   ```

### **Development**

Start the development server:

```sh
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

### **Build**

To build the project for production:

```sh
npm run build
# or
yarn build
```

### **Deployment**

After building the project, you can deploy the `dist` directory to your preferred hosting service.

## 🔧 **Troubleshooting**

### **Common OAuth Issues**

#### **Google OAuth Not Working**

- Ensure you've enabled the Google+ API in Google Cloud Console
- Verify the redirect URI matches exactly: `https://your-project.supabase.co/auth/v1/callback`
- Check that your Client ID and Secret are correctly configured in Supabase
- Make sure your Google Cloud project has billing enabled (required for OAuth)

#### **GitHub OAuth Not Working**

- Verify the Authorization callback URL is set correctly in GitHub OAuth App settings
- Ensure the Client ID and Secret are properly configured in Supabase
- Check that your GitHub OAuth App is not in development mode (if you want to test with non-owner accounts)

#### **Supabase Configuration Issues**

- Double-check your `SUPABASE_URL` and `SUPABASE_KEY` in the `.env` file
- Ensure your Supabase project is active and not paused
- Verify that Authentication is enabled in your Supabase project settings

### **Getting Help**

If you encounter issues:

1. Check the [Supabase Documentation](https://supabase.com/docs)
2. Review the [Nuxt 3 Documentation](https://nuxt.com/docs)
3. Check the [Nuxt UI Documentation](https://ui.nuxt.com)
4. Open an issue in this repository with detailed error information

## 📚 **Usage**

### **State Management**

This project uses Pinia for state management. Example store:

```typescript
export const useAuthStore = defineStore("useAuthStore", {
  state: () => ({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  }),
  actions: {
    resetState() {
      // Reset state logic
    },
  },
});
```

### **Components**

- **Auth Components**: Complete authentication flow
- **Dashboard Components**: Admin panel and navigation
- **Landing Components**: Marketing and entry pages
- **App Components**: General application components

### **Pages**

- `index.vue`: Main landing page
- `auth/`: Authentication pages (sign-in, sign-up, etc.)
- `app/`: Protected application pages

### **Layouts**

- `default.vue`: Default application layout
- `auth.vue`: Authentication layout
- `dashboard.vue`: Dashboard layout with sidebar

## 🔒 **Security Features**

- **Route Protection**: Middleware-based authentication
- **Input Validation**: Form validation and sanitization
- **Session Management**: Secure session handling
- **Environment Variables**: Secure configuration management

## 🎨 **Design System**

- **Color Schemes**: Dark and light mode support
- **Typography**: Consistent text hierarchy
- **Spacing**: Systematic spacing system
- **Components**: Reusable UI components

## 🏆 **Conclusion**

Pausa is an **excellent starter template** that demonstrates best practices in Nuxt 3 development. It offers a complete, modern, and well-structured authentication solution that can serve as a solid foundation for any application requiring user management.

The project follows Nuxt 3 conventions, uses TypeScript correctly, and provides a smooth development experience with all the modern tools needed to build scalable web applications.

## 🤝 **Contributing**

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## 📄 **License**

This project is licensed under the MIT License.
