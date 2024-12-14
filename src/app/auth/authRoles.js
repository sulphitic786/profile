import React from 'react';

export const authRoles = {
  sa: ['sa'], // Only Super Admin has access
  admin: ['sa', 'admin'], // Only SA & Admin has access
  editor: ['sa', 'admin', 'editor'], // Only SA & Admin & Editor has access
  guest: ['sa', 'admin', 'editor', 'guest'] // Everyone has access
};
