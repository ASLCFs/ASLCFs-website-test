# ASLCFs Website Test

This folder is the lightweight GitHub Pages test version of the ASLCFs website.

## Purpose

The source project remains in `D:\环科网站文件`.
This deployment folder should only contain the public frontend files needed by GitHub Pages.

Large raw data files are intentionally excluded from this folder. Data download links should be provided through the backend and external data repositories such as Zenodo.

## Deployment

Open `index.html` locally for a quick static check, or deploy this directory from the repository root with GitHub Pages.

The frontend API base URL is configured in `script.js`:

```js
const API_BASE_URL = window.ASLCFS_API_BASE_URL || "https://aslcfs-backend.onrender.com";
```

Replace the Render URL after the backend service is created.

## Data Policy

Do not commit the full `data/` directory, GeoTIFF files, zip packages, backend code, environment files, or logs.

The download flow for the test site should be:

1. User selects a dataset.
2. User submits name, title, institution, and educational email.
3. Render backend records the request in MongoDB Atlas.
4. Backend returns a Zenodo or approved external download link.
