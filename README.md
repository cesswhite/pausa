![pausa_cover_image](https://res.cloudinary.com/dpvsklksg/image/upload/Eco-Assets/Screenshot_2025-06-20_at_4.05.02_p.m._m9islr.png)

# Pausa: Minimal Authentication Starter Template for Nuxt

[Repository guide](docs/REPOSITORY_GUIDE.md): code map, authentication flows, scripts and limits.
[AGENTS.md](AGENTS.md) provides concise instructions for coding assistants.

**Pausa** is a modern web application built with **Nuxt** and **Supabase** that serves as a **minimal authentication template** and **starter kit** for developers. It provides a robust authentication flow that can be integrated into any application in seconds.

## 🎯 **Main Purpose**

Pausa is a **minimal authentication solution** that allows developers to integrate a robust authentication flow into their applications in seconds. It functions as a **starter template** that includes everything needed to handle user authentication and management.

## 🏗️ **Technical Architecture**

### **Technology Stack:**

- **Frontend**: Nuxt 3.17.3 with TypeScript
- **UI Framework**: Nuxt UI 3.1.2
- **Authentication**: Supabase Auth (no application database schema is implemented here)
- **Global State**: Pinia
- **Animations**: VueUse Motion
- **State Management**: Composables + Stores

### **Built on cutting-edge technologies:**

- Nuxt for powerful, streamlined development
- Nuxt UI for customizable and sleek UI components
- Pinia for state management simplicity
- Tailwind CSS for responsive and modern design
- Supabase for backend-as-a-service with authentication
- Uses the Nuxt v4 folder convention through `future.compatibilityVersion: 4`

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

- **SEO**: Public-home canonical/schema; auth and app routes remain outside indexing
- **TypeScript**: Nuxt type checking enabled during build
- **Hot Module Replacement**: Fast development
- **Auto-imports**: Automatic Nuxt configuration
- **Tailwind CSS v4**: Modern styling

## 📊 **State and Data Management**

### **Global State:**

- **Pinia Store**: For transient form fields; Supabase owns the session
- **Composables**: For reusable logic
- **Supabase Client**: Authentication actions and session/user access

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

- Node.js 22 or another runtime supported by the installed Nuxt version
- Bun, using the committed `bun.lock`
- **Supabase Account**: You need to have a Supabase account and be familiar with creating projects
- **OAuth Providers Setup**: Familiarity with creating OAuth applications for Google and GitHub

### **Required Accounts & Setup**

#### **1. Supabase Account**

- Create a free account at [Supabase](https://supabase.com)
- Create a new project in your Supabase dashboard
- Familiarize yourself with the Supabase dashboard and API settings

#### **2. Google OAuth Setup**

- Follow Supabase's current [Google login guide](https://supabase.com/docs/guides/auth/social-login/auth-google).
- Configure the Google OAuth client and the authorized origins/callback supplied by your Supabase project.
- Store the provider credentials in Supabase's provider settings, not in this repository.

#### **3. GitHub OAuth Setup**

- Follow Supabase's current [GitHub login guide](https://supabase.com/docs/guides/auth/social-login/auth-github).
- Configure the GitHub OAuth app with the callback supplied by your Supabase project.
- Store the provider credentials in Supabase's provider settings.

#### **4. Configure OAuth in Supabase**

- In your Supabase dashboard, go to "Authentication" → "Providers"
- Enable and configure Google and GitHub providers
- Add the Client IDs and Client Secrets from the previous steps
- Verify the Site URL and allowed redirect URLs for each environment. Source code does not confirm dashboard configuration.
- `Auth/Providers.vue` currently passes a relative `/app/dashboard` redirect; email flows build absolute URLs from `NUXT_SITE_URL`. See the guide before diagnosing return-path behavior.

### **Installation**

1. Clone the repository:

   ```sh
   git clone https://github.com/{username}/pausa.git
   cd pausa
   ```

2. Install dependencies:

   ```sh
   bun install --frozen-lockfile
   ```

3. Set up environment variables:

   Configure these names in your local environment and deployment provider. Do not commit values:

   | Name | Purpose |
   | --- | --- |
   | `SUPABASE_URL` | Project endpoint used by the Supabase module. |
   | `SUPABASE_KEY` | Browser-compatible Auth key; never a privileged server key. |
   | `NUXT_SITE_URL` | Site origin used for email and recovery redirects. |

   **Important Notes:**

   - The OAuth providers (Google and GitHub) are configured directly in your Supabase dashboard
   - No additional environment variables are needed for OAuth as Supabase handles the configuration
   - Make sure you've completed the OAuth setup steps above before testing social login

   Production requires its own correct environment and allowed redirects; no private project identifiers or credentials belong in documentation.

### **Development**

Start the development server:

```sh
bun run dev
```

The application will be available at `http://localhost:3000`.

### **Build**

To build the project for production:

```sh
bun run build
```

### **Deployment**

Use the Nitro preset appropriate to your host. With the Node server preset, `bun run build`
produces `.output/`, started using `node .output/server/index.mjs`. Preview locally with
`bun run preview`. `bun run generate` is a separate static-generation option; verify auth
redirects and hosting behavior before selecting it. There is no default `dist/` deployment here.

## 🔧 **Troubleshooting**

### **Common OAuth Issues**

#### **Google OAuth Not Working**

- Verify the OAuth client and authorized callback against the current Google guide above
- Check that your Client ID and Secret are correctly configured in Supabase
- Check provider consent/audience settings and Supabase's allowed return URLs

#### **GitHub OAuth Not Working**

- Verify the Authorization callback URL is set correctly in GitHub OAuth App settings
- Ensure the Client ID and Secret are properly configured in Supabase
- Check the provider error and Supabase's allowed return URLs; do not infer remote settings from the local code

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

`app/stores/auth.ts` exports `useAuthStore`. Its nested `state` object holds `name`, `email`,
`password` and `confirm_password` form fields; `resetState` clears them. The authenticated
user and session come from Supabase composables, not from those fields. Do not log form
passwords or session tokens when investigating state.

### **Components**

- **Auth Components**: Complete authentication flow
- **Dashboard Components**: Authenticated workspace navigation; no admin-role system
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

- **Route Protection**: Middleware guards dashboard/settings navigation; future APIs/data need their own authorization
- **Input Validation**: Form field checks; not a general sanitization layer
- **Session Management**: Supabase Auth sessions, with provider configuration verified separately
- **Environment Variables**: Configuration names documented above; never commit credentials or privileged keys

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
