# umd-viewer

UMD Libraries' Mirador 4-based IIIF image viewer

## Requires

* NodeJS 24+

## Development Setup

```zsh
git clone git@github.com:umd-lib/umd-viewer.git
cd umd-viewer
npm install
npm run dev
```

The umd-viewer application will now be running in development mode (with
automatic reload on code changes) at <http://localhost:5173>.

## Static Build

```zsh
npm run build
```

Static build files with be written to the `dist` directory.

## Docker Image

```zsh
docker build -t docker.lib.umd.edu/viewer .

docker run -it --rm -p 8888:80 docker.lib.umd.edu/viewer
```

The application will be at <http://localhost:8888/>

## License

Apache-2.0

See the [LICENSE](LICENSE) file for license rights and limitations.
