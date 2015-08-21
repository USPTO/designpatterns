/tmp/node_modules:
  file.directory:
    - user: vagrant
    - group: vagrant

/vagrant/node_modules:
  file.directory

symmount:
  mount.mounted:
    - name: /vagrant/node_modules
    - device: /tmp/node_modules
    - fstype: None
    - opts:
      - bind
    - user: vagrant
    - require:
       - file: /tmp/node_modules
       - file: /vagrant/node_modules
