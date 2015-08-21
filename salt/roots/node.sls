nodesource:
  pkgrepo.managed:
    - humanname: NodeSource Node.js Binary Distribution
    - name: deb https://deb.nodesource.com/node_0.12 trusty main
    - dist: trusty
    - file: /etc/apt/sources.list.d/nodesource.list
    - key_url: https://deb.nodesource.com/gpgkey/nodesource.gpg.key

nodev0.12:
  pkg.installed:
    - name: nodejs
    - require:
      - pkgrepo: nodesource

