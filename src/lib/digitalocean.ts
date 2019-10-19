import Axios from 'axios';
import { AccountService } from './services/account-service';
import { ActionService } from './services/actions-service';
import { BlockStorageActionService } from './services/block-storage-actions-service';
import { BlockStorageService } from './services/block-storage-service';
import { CdnService } from './services/cdn-service';
import { CertificateService } from './services/certificate-service';
import { DomainRecordService } from './services/domain-record-service';
import { DomainService } from './services/domain-service';
import { DropletActionService } from './services/droplet-actions-service';
import { DropletService } from './services/droplet-service';
import { FirewallService } from './services/firewall-service';
import { FloatingIPActionService } from './services/floating-ip-actions-service';
import { FloatingIPService } from './services/floating-ip-service';
import { ImageActionService } from './services/image-actions-service';
import { ImageService } from './services/image-service';
import { LoadBalancerService } from './services/load-balancer-service';
import { ProjectService } from './services/project-service';
import { RegionService } from './services/region-service';
import { SizeService } from './services/size-service';
import { SnapshotService } from './services/snapshot-service';
import { SshService } from './services/ssh-service';
import { TagService } from './services/tag-service';
import { KubernetesService } from './services/kubernetes-service';

export class DigitalOcean {
  public account: AccountService;
  public actions: ActionService;
  public blockStorage: BlockStorageService;
  public blockStorageActions: BlockStorageActionService;
  public cdn: CdnService;
  public certificates: CertificateService;
  public domains: DomainService;
  public domainRecords: DomainRecordService;
  public droplets: DropletService;
  public dropletActions: DropletActionService;
  public firewalls: FirewallService;
  public floatingIPs: FloatingIPService;
  public floatingIPActions: FloatingIPActionService;
  public images: ImageService;
  public imageActions: ImageActionService;
  public kubernetes: KubernetesService;
  public loadBalancers: LoadBalancerService;
  public projects: ProjectService;
  public regions: RegionService;
  public sizes: SizeService;
  public snapshots: SnapshotService;
  public ssh: SshService;
  public tags: TagService;

  constructor(private token: string) {
    Axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;
    Axios.defaults.headers.common['Content-Type'] = `application/json`;

    this.account = new AccountService();
    this.actions = new ActionService();
    this.blockStorage = new BlockStorageService();
    this.blockStorageActions = new BlockStorageActionService();
    this.cdn = new CdnService();
    this.certificates = new CertificateService();
    this.domains = new DomainService();
    this.domainRecords = new DomainRecordService();
    this.droplets = new DropletService();
    this.dropletActions = new DropletActionService();
    this.firewalls = new FirewallService();
    this.floatingIPs = new FloatingIPService();
    this.floatingIPActions = new FloatingIPActionService();
    this.images = new ImageService();
    this.imageActions = new ImageActionService();
    this.kubernetes = new KubernetesService();
    this.loadBalancers = new LoadBalancerService();
    this.projects = new ProjectService();
    this.regions = new RegionService();
    this.sizes = new SizeService();
    this.snapshots = new SnapshotService();
    this.ssh = new SshService();
    this.tags = new TagService();
  }
}
