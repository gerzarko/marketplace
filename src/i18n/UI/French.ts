export const French = {
  textDirection: "ltr",

  pageTitles: {
    services: "prestations de service",
    signUp: "S'inscrire",
    login: "Connexion",
    home: "Maison",
    signIn: "S'identifier",
    createClientAccount: "Créer un compte client",
    editClientAccount: "Modifier le compte client",
    viewClientAccount: "Voir le compte client",
    createPost: "Créer un article",
    createProviderAccount: "Créer un compte fournisseur",
    editProviderAccount: "Modifier le compte du fournisseur",
    viewProviderAccount: "Afficher le compte du fournisseur",
    page404: "404 - Page non trouvée",
    requestPasswordReset: "Demander la réinitialisation du mot de passe",
    resetPassword: "réinitialiser le mot de passe",
  },

  buttons: {
    providerProfile: "Mon profil fournisseur",
    editProfile: "Editer le profil",
    register: "Enregistrer",
    uploadImage: "Télécharger l'image",
    uploading: "Téléchargement ...",
    loading: "Chargement ...",
    login: "Connexion",
    signUp: "s'inscrire",
    signIn: "s'identifier",
    signOut: "se déconnecter",
    returnHome: "Cliquez pour retourner à la maison",
    reset: "Réinitialiser",
    post: "Poste",
    next: "Suivante",
    previous: "Précédente",
    delete: "Supprimer",
    contact: "E-mail",
    phone: "Appel",
  },

  messages: {
    noAccount: "Vous n'avez pas de compte ? Cliquez ici pour ",
    passwordLength:
      "Le mot de passe doit comporter au moins 8 caractères, contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.",
    passwordMatch: "Les mots de passe ne correspondent pas",
    passwordReset: "Réinitialisation du mot de passe",
    forgotPassword: "Mot de passe oublié? Cliquez ici pour",
    alreadyAccount: "Vous avez déjà un compte ? Cliquez ici pour",
    error404: "Une erreur est survenue",
    onlyProvider: "Seuls les fournisseurs peuvent créer des publications.",
    signInAsProvider:
      "Veuillez vous connecter à un compte de fournisseur avant de publier.",
    checkEmail: "Vérifiez votre e-mail pour le lien de réinitialisation !",
    checkConfirmEmail: "Vérifiez votre e-mail pour le lien de confirmation !",
    signIn: "Veuillez vous connecter pour accéder à cette page.",
    createProviderAccount:
      "Veuillez vous connecter pour créer un profil de fournisseur.",
    createClientAccount: "Veuillez vous connecter pour créer un profil client.",
    viewProviderAccount:
      "Vous n'avez pas de compte fournisseur, veuillez en créer un pour voir votre profil fournisseur.",
    noPosts: "Aucune publication disponible.",
    noPost: "Message introuvable",
    selectAnImage: "Vous devez sélectionner une image à télécharger.",
    noProvider: "Aucun fournisseur trouvé.",
  },

  formLabels: {
    title: "Titre",
    serviceCategory: "Catégorie de services",
    postContent: "Publier un contenu",
    country: "Pays",
    majorMunicipality: "Municipalité principale",
    minorMunicipality: "Municipalité mineure",
    governingDistrict: "District de gouvernement",
    search: "Recherche",
    firstName: "Prénom",
    lastName: "Nom de famille",
    providerName: "Nom du fournisseur",
    phone: "Numéro de téléphone",
    email: "E-mail",
    password: "Mot de passe",
    confirmPassword: "Confirmez le mot de passe",
    displayName: "Afficher un nom",
    enterPostContent: "Entrez le contenu du message ici",
    noValue: "Non fourni",
    providerInfo: "Informations sur le fournisseur",
    posts: "Messages du fournisseur",
    profileInfo: "Informations sur le profil",
    yourPosts: "Vos Publications",
  },

  postLabels: {
    provider: "Fournisseuse: ",
    location: "Emplacement: ",
    category: "Catégorie: ",
    image: "Publier une image",
    slide: "Diapositive",
    providerProfileImage: "Image du profil du fournisseur",
  },

  headerData: {
    links: [
      {
        text: "Maison",
        href: "/fr",
      },
      {
        text: "Prestations de service",
        href: "fr/services",
      },
    ],
    actions: [],
  },

  footerData: {
    links: [
      {
        title: "Produit",
        links: [
          // { text: string, href: string },
          // { text: string, href: string },
          // { text: string, href: string },
          // { text: string, href: string },
          // { text: string, href: string },
          // { text: string, href: string },
          // { text: string, href: string },
        ],
      },
      {
        title: "Plateforme",
        links: [
          // { text: string, href: string },
          // { text: string, href: string },
        ],
      },
      {
        title: "Soutien",
        links: [
          // { text: string, href: string },
          // { text: string, href: string },
          // { text: string, href: string },
          // { text: string, href: string },
          // { text: string, href: string },
        ],
      },
      {
        title: "Entreprise",
        links: [
          // { text: string, href: string },
          // { text: string, href: string },
          // { text: string, href: string },
          // { text: string, href: string },
          // { text: string, href: string },
          // { text: string, href: string },
          // { text: string, href: string },
        ],
      },
    ],
    secondaryLinks: [
      { text: "Conditions ", href: "fr/terms" },
      { text: "politique de confidentialité", href: "fr/privacy" },
    ],
    socialLinks: [
      { ariaLabel: "Twitter", icon: "tabler:brand-twitter", href: "#" },
      { ariaLabel: "Instagram", icon: "tabler:brand-instagram", href: "#" },
      { ariaLabel: "Facebook", icon: "tabler:brand-facebook", href: "#" },
      { ariaLabel: "RSS", icon: "tabler:rss", href: "/rss.xml" },
      { ariaLabel: "Github", icon: "tabler:brand-github", href: "#" },
    ],
    footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[]"></span>
    Faite par <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://datagrove.com/"> Datagrove </a> Tous les droits sont réservés.
  `,
  },

  productCategoryInfo: {
    categories: [
      { name: "Jardinage", description: "", ariaLabel: "Jardinage", id: "1" },
      {
        name: "Construction",
        description: "",
        ariaLabel: "Construction",
        id: "3",
      },
      { name: "Beauté", description: "", ariaLabel: "Beauté", id: "2" },
      { name: "Automobile", description: "", ariaLabel: "Automobile", id: "5" },
      { name: "Ordinateur", description: "", ariaLabel: "Ordinateur", id: "4" },
      { name: "Créative", description: "", ariaLabel: "Créative", id: "6" },
      { name: "Financière", description: "", ariaLabel: "Financière", id: "7" },
      { name: "Nettoyage", description: "", ariaLabel: "Nettoyage", id: "8" },
      {
        name: "Animaux domestiques",
        description: "",
        ariaLabel: "Animaux domestiques",
        id: "9",
      },
      { name: "Juridique", description: "", ariaLabel: "Juridique", id: "10" },
      { name: "Santé", description: "", ariaLabel: "Santé", id: "11" },
      { name: "Travail", description: "", ariaLabel: "Travail", id: "12" },
      { name: "Voyage", description: "", ariaLabel: "Voyage", id: "13" },
      // Add more products as needed
    ],
  },

  homePageText: {
    headline: "Tout ce dont vous avez besoin pour faire le travail.",
    subHeadline:
      "Les fournisseurs publient des services. Les clients recherchent des messages. Le travail est fait.",
    ariaLabel: "Image d'information d'espace réservé",
  },
} as const;
